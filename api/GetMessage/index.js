module.exports = async function (context, req) {
  const date = "2024-04-24T03:11:10.888Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

