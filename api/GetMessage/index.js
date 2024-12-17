module.exports = async function (context, req) {
  const date = "2024-12-17T04:15:39.675Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

