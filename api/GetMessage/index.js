module.exports = async function (context, req) {
  const date = "2023-02-01T23:09:40.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

