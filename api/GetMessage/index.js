module.exports = async function (context, req) {
  const date = "2023-10-13T07:08:31.341Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

