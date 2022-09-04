module.exports = async function (context, req) {
  const date = "2022-09-04T20:12:41.024Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

