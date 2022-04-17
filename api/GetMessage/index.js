module.exports = async function (context, req) {
  const date = "2022-04-17T07:10:25.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

