module.exports = async function (context, req) {
  const date = "2024-03-18T03:10:32.162Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

