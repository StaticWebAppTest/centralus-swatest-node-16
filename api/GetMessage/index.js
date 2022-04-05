module.exports = async function (context, req) {
  const date = "2022-04-05T12:18:17.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

