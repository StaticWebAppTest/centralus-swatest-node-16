module.exports = async function (context, req) {
  const date = "2024-01-10T08:12:24.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

