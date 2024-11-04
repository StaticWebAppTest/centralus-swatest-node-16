module.exports = async function (context, req) {
  const date = "2024-11-04T21:10:35.971Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

