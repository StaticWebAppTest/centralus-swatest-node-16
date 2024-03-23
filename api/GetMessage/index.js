module.exports = async function (context, req) {
  const date = "2024-03-23T11:06:41.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

