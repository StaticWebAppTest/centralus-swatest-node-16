module.exports = async function (context, req) {
  const date = "2024-10-17T16:15:16.190Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

