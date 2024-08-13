module.exports = async function (context, req) {
  const date = "2024-08-13T23:10:04.421Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

