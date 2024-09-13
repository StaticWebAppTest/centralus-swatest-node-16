module.exports = async function (context, req) {
  const date = "2024-09-13T13:17:17.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

