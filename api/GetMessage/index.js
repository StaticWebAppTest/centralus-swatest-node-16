module.exports = async function (context, req) {
  const date = "2025-03-21T12:23:50.716Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

