module.exports = async function (context, req) {
  const date = "2024-11-10T18:13:49.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

