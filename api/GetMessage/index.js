module.exports = async function (context, req) {
  const date = "2023-06-15T05:08:33.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

