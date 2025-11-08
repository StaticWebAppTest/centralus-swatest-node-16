module.exports = async function (context, req) {
  const date = "2025-11-08T19:09:17.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

