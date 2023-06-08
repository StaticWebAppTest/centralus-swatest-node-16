module.exports = async function (context, req) {
  const date = "2023-06-08T03:13:25.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

