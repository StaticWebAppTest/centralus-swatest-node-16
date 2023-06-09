module.exports = async function (context, req) {
  const date = "2023-06-09T14:08:26.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

