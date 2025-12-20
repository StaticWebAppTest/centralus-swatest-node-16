module.exports = async function (context, req) {
  const date = "2025-12-20T09:13:57.247Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

