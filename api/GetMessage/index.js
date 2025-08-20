module.exports = async function (context, req) {
  const date = "2025-08-20T14:13:43.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

