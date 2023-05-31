module.exports = async function (context, req) {
  const date = "2023-05-31T14:07:38.295Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

