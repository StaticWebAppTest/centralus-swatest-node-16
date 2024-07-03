module.exports = async function (context, req) {
  const date = "2024-07-03T14:10:29.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

