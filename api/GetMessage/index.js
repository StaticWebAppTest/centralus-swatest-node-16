module.exports = async function (context, req) {
  const date = "2025-12-09T21:11:54.426Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

