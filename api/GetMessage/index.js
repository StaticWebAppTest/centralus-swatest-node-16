module.exports = async function (context, req) {
  const date = "2023-05-13T20:08:36.183Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

