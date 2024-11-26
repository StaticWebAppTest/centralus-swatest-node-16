module.exports = async function (context, req) {
  const date = "2024-11-26T16:15:52.038Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

