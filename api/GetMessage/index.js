module.exports = async function (context, req) {
  const date = "2023-12-09T18:10:31.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

