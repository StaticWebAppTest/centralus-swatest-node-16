module.exports = async function (context, req) {
  const date = "2024-11-21T10:13:41.461Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

