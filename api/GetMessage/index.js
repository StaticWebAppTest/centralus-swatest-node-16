module.exports = async function (context, req) {
  const date = "2025-01-30T16:14:01.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

