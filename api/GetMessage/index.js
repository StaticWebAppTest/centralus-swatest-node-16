module.exports = async function (context, req) {
  const date = "2024-02-07T04:11:15.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

