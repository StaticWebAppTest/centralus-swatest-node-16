module.exports = async function (context, req) {
  const date = "2023-11-08T22:08:09.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

