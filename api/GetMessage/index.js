module.exports = async function (context, req) {
  const date = "2024-12-26T14:10:34.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

