module.exports = async function (context, req) {
  const date = "2024-07-17T16:12:42.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

