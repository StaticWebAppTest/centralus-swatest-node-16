module.exports = async function (context, req) {
  const date = "2023-11-17T03:09:43.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

