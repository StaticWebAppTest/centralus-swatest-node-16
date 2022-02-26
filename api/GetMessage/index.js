module.exports = async function (context, req) {
  const date = "2022-02-26T15:09:42.553Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

