module.exports = async function (context, req) {
  const date = "2024-09-13T05:11:17.639Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

