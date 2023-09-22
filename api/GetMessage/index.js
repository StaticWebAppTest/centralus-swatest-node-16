module.exports = async function (context, req) {
  const date = "2023-09-22T14:08:08.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

