module.exports = async function (context, req) {
  const date = "2025-08-21T14:13:44.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

