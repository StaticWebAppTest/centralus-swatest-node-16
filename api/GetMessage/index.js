module.exports = async function (context, req) {
  const date = "2023-08-19T00:37:16.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

