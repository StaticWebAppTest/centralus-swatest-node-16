module.exports = async function (context, req) {
  const date = "2022-03-26T20:10:43.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

