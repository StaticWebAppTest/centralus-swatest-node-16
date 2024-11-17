module.exports = async function (context, req) {
  const date = "2024-11-17T05:12:03.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

