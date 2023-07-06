module.exports = async function (context, req) {
  const date = "2023-07-06T10:11:11.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

