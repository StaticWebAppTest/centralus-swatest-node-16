module.exports = async function (context, req) {
  const date = "2024-07-08T03:12:38.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

