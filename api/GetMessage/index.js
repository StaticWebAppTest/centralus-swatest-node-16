module.exports = async function (context, req) {
  const date = "2025-06-07T10:13:21.510Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

