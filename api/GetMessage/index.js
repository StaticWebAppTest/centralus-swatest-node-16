module.exports = async function (context, req) {
  const date = "2023-11-22T08:12:32.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

