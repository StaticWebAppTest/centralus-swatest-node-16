module.exports = async function (context, req) {
  const date = "2024-02-22T09:10:01.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

