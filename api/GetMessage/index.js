module.exports = async function (context, req) {
  const date = "2024-09-07T04:13:39.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

