module.exports = async function (context, req) {
  const date = "2025-04-13T11:09:28.670Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

