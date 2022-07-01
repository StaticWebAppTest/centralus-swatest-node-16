module.exports = async function (context, req) {
  const date = "2022-07-01T05:28:37.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

