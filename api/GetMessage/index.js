module.exports = async function (context, req) {
  const date = "2024-06-17T18:13:23.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

