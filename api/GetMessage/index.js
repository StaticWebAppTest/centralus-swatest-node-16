module.exports = async function (context, req) {
  const date = "2025-04-20T13:20:22.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

