module.exports = async function (context, req) {
  const date = "2024-12-27T23:10:45.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

