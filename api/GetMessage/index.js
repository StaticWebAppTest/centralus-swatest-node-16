module.exports = async function (context, req) {
  const date = "2023-01-18T21:08:49.695Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

