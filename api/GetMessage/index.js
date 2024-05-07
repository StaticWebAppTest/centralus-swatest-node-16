module.exports = async function (context, req) {
  const date = "2024-05-07T23:08:26.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

