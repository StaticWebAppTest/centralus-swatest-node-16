module.exports = async function (context, req) {
  const date = "2023-11-13T07:08:53.064Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

