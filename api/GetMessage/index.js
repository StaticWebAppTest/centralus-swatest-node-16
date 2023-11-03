module.exports = async function (context, req) {
  const date = "2023-11-03T14:08:46.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

