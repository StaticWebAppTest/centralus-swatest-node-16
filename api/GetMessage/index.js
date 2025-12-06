module.exports = async function (context, req) {
  const date = "2025-12-06T08:17:23.156Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

