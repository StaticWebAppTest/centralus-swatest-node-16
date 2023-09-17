module.exports = async function (context, req) {
  const date = "2023-09-17T16:09:45.134Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

