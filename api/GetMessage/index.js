module.exports = async function (context, req) {
  const date = "2022-06-01T01:04:02.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

