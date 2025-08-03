module.exports = async function (context, req) {
  const date = "2025-08-03T17:12:59.411Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

