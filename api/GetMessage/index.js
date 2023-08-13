module.exports = async function (context, req) {
  const date = "2023-08-13T19:06:02.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

