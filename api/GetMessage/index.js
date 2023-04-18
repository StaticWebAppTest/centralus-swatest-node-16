module.exports = async function (context, req) {
  const date = "2023-04-18T21:08:14.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

