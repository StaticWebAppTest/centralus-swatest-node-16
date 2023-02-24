module.exports = async function (context, req) {
  const date = "2023-02-24T23:10:05.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

