module.exports = async function (context, req) {
  const date = "2024-06-30T02:03:13.146Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

