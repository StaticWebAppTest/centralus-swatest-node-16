module.exports = async function (context, req) {
  const date = "2023-02-10T22:09:22.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

