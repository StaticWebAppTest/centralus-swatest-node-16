module.exports = async function (context, req) {
  const date = "2024-01-08T22:08:29.908Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

