module.exports = async function (context, req) {
  const date = "2022-10-17T20:14:41.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

