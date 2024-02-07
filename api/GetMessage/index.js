module.exports = async function (context, req) {
  const date = "2024-02-07T03:10:40.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

