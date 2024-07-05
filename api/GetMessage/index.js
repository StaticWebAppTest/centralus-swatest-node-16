module.exports = async function (context, req) {
  const date = "2024-07-05T04:14:21.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

