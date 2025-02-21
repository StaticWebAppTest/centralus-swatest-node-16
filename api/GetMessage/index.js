module.exports = async function (context, req) {
  const date = "2025-02-21T10:12:30.212Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

