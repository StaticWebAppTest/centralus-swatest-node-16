module.exports = async function (context, req) {
  const date = "2023-11-15T11:07:58.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

