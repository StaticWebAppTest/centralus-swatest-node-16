module.exports = async function (context, req) {
  const date = "2024-12-13T22:11:09.892Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

