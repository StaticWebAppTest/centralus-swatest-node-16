module.exports = async function (context, req) {
  const date = "2024-02-09T04:11:05.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

