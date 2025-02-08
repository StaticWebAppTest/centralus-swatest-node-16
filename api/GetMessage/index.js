module.exports = async function (context, req) {
  const date = "2025-02-08T16:12:24.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

