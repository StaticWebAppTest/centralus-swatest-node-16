module.exports = async function (context, req) {
  const date = "2022-06-08T19:08:32.022Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

