module.exports = async function (context, req) {
  const date = "2023-09-26T11:07:37.328Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

