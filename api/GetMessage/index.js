module.exports = async function (context, req) {
  const date = "2022-09-08T20:13:16.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

