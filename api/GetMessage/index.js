module.exports = async function (context, req) {
  const date = "2024-11-13T23:11:14.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

