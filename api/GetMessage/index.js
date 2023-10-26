module.exports = async function (context, req) {
  const date = "2023-10-26T20:09:14.084Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

