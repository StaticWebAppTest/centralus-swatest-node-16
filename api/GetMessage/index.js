module.exports = async function (context, req) {
  const date = "2023-11-13T19:07:29.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

