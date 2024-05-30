module.exports = async function (context, req) {
  const date = "2024-05-30T05:09:46.474Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

