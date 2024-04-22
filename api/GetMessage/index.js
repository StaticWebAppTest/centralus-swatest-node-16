module.exports = async function (context, req) {
  const date = "2024-04-22T23:08:58.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

