module.exports = async function (context, req) {
  const date = "2025-08-21T13:24:50.011Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

