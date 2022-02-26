module.exports = async function (context, req) {
  const date = "2022-02-26T12:16:06.331Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

