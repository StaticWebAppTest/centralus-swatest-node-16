module.exports = async function (context, req) {
  const date = "2024-08-08T22:10:11.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

