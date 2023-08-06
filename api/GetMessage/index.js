module.exports = async function (context, req) {
  const date = "2023-08-06T13:09:12.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

