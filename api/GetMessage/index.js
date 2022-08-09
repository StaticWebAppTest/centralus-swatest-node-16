module.exports = async function (context, req) {
  const date = "2022-08-09T13:40:53.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

