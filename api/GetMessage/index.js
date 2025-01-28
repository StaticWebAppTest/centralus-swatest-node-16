module.exports = async function (context, req) {
  const date = "2025-01-28T21:10:26.955Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

