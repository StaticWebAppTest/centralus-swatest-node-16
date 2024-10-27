module.exports = async function (context, req) {
  const date = "2024-10-27T05:11:30.090Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

