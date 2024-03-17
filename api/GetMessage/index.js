module.exports = async function (context, req) {
  const date = "2024-03-17T16:09:57.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

