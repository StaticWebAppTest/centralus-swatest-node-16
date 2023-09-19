module.exports = async function (context, req) {
  const date = "2023-09-19T23:08:06.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

