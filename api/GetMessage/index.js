module.exports = async function (context, req) {
  const date = "2024-06-14T01:56:14.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

