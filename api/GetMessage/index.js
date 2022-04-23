module.exports = async function (context, req) {
  const date = "2022-04-23T19:08:38.316Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

