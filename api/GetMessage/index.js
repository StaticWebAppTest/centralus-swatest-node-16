module.exports = async function (context, req) {
  const date = "2023-04-19T05:08:53.435Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

