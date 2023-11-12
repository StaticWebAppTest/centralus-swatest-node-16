module.exports = async function (context, req) {
  const date = "2023-11-12T20:08:34.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

