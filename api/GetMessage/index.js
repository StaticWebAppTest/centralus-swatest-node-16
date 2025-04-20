module.exports = async function (context, req) {
  const date = "2025-04-20T07:12:30.153Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

