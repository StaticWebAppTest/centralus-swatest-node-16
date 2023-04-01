module.exports = async function (context, req) {
  const date = "2023-04-01T07:07:44.758Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

