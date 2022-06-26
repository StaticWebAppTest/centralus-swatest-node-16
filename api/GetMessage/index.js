module.exports = async function (context, req) {
  const date = "2022-06-26T22:09:24.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

