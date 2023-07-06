module.exports = async function (context, req) {
  const date = "2023-07-06T12:20:41.442Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

