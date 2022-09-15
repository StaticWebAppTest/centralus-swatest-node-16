module.exports = async function (context, req) {
  const date = "2022-09-15T05:57:33.590Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

