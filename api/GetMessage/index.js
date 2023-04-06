module.exports = async function (context, req) {
  const date = "2023-04-06T18:10:48.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

