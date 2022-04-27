module.exports = async function (context, req) {
  const date = "2022-04-27T19:09:12.075Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

