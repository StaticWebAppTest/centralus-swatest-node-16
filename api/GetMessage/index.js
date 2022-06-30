module.exports = async function (context, req) {
  const date = "2022-06-30T18:14:58.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

