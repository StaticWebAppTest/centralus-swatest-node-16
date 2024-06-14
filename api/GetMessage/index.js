module.exports = async function (context, req) {
  const date = "2024-06-14T04:12:27.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

