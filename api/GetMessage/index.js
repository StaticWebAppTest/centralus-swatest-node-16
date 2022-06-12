module.exports = async function (context, req) {
  const date = "2022-06-12T13:17:41.412Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

