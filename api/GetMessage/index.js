module.exports = async function (context, req) {
  const date = "2023-11-15T10:10:37.214Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

