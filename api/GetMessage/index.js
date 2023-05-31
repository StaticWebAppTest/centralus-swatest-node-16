module.exports = async function (context, req) {
  const date = "2023-05-31T11:07:21.679Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

