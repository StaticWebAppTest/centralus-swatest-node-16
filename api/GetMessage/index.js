module.exports = async function (context, req) {
  const date = "2022-11-03T13:38:41.029Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

