module.exports = async function (context, req) {
  const date = "2022-08-14T23:10:26.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

