module.exports = async function (context, req) {
  const date = "2024-02-06T06:11:59.822Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

