module.exports = async function (context, req) {
  const date = "2025-06-09T05:15:16.703Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

