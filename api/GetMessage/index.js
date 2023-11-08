module.exports = async function (context, req) {
  const date = "2023-11-08T20:09:24.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

