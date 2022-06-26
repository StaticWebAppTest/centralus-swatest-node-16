module.exports = async function (context, req) {
  const date = "2022-06-26T23:09:54.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

