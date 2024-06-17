module.exports = async function (context, req) {
  const date = "2024-06-17T16:13:01.690Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

