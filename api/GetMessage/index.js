module.exports = async function (context, req) {
  const date = "2022-09-01T10:12:32.168Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

