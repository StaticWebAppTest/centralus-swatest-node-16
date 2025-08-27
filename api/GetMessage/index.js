module.exports = async function (context, req) {
  const date = "2025-08-27T17:11:20.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

