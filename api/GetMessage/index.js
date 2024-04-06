module.exports = async function (context, req) {
  const date = "2024-04-06T02:15:21.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

