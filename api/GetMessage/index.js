module.exports = async function (context, req) {
  const date = "2024-10-10T22:11:30.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

