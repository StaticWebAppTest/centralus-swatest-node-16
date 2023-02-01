module.exports = async function (context, req) {
  const date = "2023-02-01T09:10:24.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

