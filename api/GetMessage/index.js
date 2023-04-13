module.exports = async function (context, req) {
  const date = "2023-04-13T03:09:28.068Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

