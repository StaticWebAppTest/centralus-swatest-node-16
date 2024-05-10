module.exports = async function (context, req) {
  const date = "2024-05-10T00:43:41.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

