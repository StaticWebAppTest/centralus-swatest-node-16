module.exports = async function (context, req) {
  const date = "2025-05-20T07:13:27.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

