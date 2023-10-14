module.exports = async function (context, req) {
  const date = "2023-10-14T20:08:26.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

