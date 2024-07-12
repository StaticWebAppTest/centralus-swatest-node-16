module.exports = async function (context, req) {
  const date = "2024-07-12T03:12:23.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

