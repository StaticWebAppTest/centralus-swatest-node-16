module.exports = async function (context, req) {
  const date = "2025-02-06T19:09:09.781Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

