module.exports = async function (context, req) {
  const date = "2025-12-24T11:13:17.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

