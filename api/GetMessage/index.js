module.exports = async function (context, req) {
  const date = "2023-05-07T09:07:53.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

