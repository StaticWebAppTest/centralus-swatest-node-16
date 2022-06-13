module.exports = async function (context, req) {
  const date = "2022-06-13T19:08:22.972Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

