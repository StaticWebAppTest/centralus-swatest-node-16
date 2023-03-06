module.exports = async function (context, req) {
  const date = "2023-03-06T04:12:26.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

