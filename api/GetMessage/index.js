module.exports = async function (context, req) {
  const date = "2022-05-05T09:12:55.978Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

