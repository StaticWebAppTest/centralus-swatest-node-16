module.exports = async function (context, req) {
  const date = "2023-12-06T15:09:57.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

