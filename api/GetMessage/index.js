module.exports = async function (context, req) {
  const date = "2024-02-13T22:10:18.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

