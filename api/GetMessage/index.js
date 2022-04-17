module.exports = async function (context, req) {
  const date = "2022-04-17T19:08:28.487Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

