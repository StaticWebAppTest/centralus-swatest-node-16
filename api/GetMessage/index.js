module.exports = async function (context, req) {
  const date = "2025-04-04T19:10:20.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

