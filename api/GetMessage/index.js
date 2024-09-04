module.exports = async function (context, req) {
  const date = "2024-09-04T11:09:17.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

