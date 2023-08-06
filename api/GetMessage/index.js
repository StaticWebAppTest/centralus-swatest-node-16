module.exports = async function (context, req) {
  const date = "2023-08-06T18:09:29.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

