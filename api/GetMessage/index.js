module.exports = async function (context, req) {
  const date = "2024-12-24T16:13:24.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

