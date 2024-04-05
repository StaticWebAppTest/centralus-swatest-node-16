module.exports = async function (context, req) {
  const date = "2024-04-05T11:07:49.694Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

