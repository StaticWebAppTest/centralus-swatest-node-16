module.exports = async function (context, req) {
  const date = "2024-03-30T12:14:31.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

