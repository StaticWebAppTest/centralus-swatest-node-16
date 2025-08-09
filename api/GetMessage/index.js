module.exports = async function (context, req) {
  const date = "2025-08-09T14:12:31.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

