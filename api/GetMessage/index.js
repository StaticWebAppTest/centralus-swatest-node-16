module.exports = async function (context, req) {
  const date = "2025-11-29T13:21:25.792Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

