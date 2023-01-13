module.exports = async function (context, req) {
  const date = "2023-01-13T19:07:37.804Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

