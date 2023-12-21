module.exports = async function (context, req) {
  const date = "2023-12-21T17:08:41.837Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

