module.exports = async function (context, req) {
  const date = "2022-04-22T09:11:35.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

