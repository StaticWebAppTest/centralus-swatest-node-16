module.exports = async function (context, req) {
  const date = "2023-12-26T11:07:37.330Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

