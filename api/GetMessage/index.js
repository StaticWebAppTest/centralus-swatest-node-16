module.exports = async function (context, req) {
  const date = "2024-11-27T04:15:21.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

