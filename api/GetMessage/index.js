module.exports = async function (context, req) {
  const date = "2024-07-06T02:25:52.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

