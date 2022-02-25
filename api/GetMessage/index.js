module.exports = async function (context, req) {
  const date = "2022-02-25T19:08:42.516Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

