module.exports = async function (context, req) {
  const date = "2024-06-03T21:10:08.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

