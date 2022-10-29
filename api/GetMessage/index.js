module.exports = async function (context, req) {
  const date = "2022-10-29T12:20:51.255Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

