module.exports = async function (context, req) {
  const date = "2023-12-14T14:08:53.753Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

