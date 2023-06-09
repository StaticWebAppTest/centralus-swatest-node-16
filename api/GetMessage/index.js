module.exports = async function (context, req) {
  const date = "2023-06-09T00:57:01.921Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

