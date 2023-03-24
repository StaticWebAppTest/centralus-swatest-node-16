module.exports = async function (context, req) {
  const date = "2023-03-24T13:13:32.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

