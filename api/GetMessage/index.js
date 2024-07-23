module.exports = async function (context, req) {
  const date = "2024-07-23T04:12:47.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

