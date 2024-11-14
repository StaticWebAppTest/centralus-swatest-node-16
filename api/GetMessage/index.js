module.exports = async function (context, req) {
  const date = "2024-11-14T04:14:49.312Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

