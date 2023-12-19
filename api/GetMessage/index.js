module.exports = async function (context, req) {
  const date = "2023-12-19T07:08:53.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

