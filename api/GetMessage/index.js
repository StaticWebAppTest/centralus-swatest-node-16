module.exports = async function (context, req) {
  const date = "2023-09-01T19:06:49.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

