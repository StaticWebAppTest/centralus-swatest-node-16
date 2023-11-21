module.exports = async function (context, req) {
  const date = "2023-11-21T21:08:42.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

