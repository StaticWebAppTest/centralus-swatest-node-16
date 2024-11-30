module.exports = async function (context, req) {
  const date = "2024-11-30T10:11:35.061Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

