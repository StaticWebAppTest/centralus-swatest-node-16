module.exports = async function (context, req) {
  const date = "2022-03-24T03:17:36.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

