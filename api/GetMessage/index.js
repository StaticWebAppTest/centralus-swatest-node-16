module.exports = async function (context, req) {
  const date = "2024-11-12T04:14:05.259Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

