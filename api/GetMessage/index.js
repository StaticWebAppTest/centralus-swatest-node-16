module.exports = async function (context, req) {
  const date = "2024-07-09T12:20:16.574Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

