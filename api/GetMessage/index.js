module.exports = async function (context, req) {
  const date = "2022-05-26T19:08:37.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

