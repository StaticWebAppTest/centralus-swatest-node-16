module.exports = async function (context, req) {
  const date = "2023-12-23T23:08:41.318Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

