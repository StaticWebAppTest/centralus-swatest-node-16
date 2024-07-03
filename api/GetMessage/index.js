module.exports = async function (context, req) {
  const date = "2024-07-03T04:12:27.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

