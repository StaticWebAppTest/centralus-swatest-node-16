module.exports = async function (context, req) {
  const date = "2025-03-30T05:11:51.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

