module.exports = async function (context, req) {
  const date = "2023-01-18T10:10:34.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

