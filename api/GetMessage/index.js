module.exports = async function (context, req) {
  const date = "2024-03-17T08:10:35.045Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

