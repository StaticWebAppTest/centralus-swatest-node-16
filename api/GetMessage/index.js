module.exports = async function (context, req) {
  const date = "2023-03-04T07:08:41.647Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

