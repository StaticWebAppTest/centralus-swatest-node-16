module.exports = async function (context, req) {
  const date = "2023-04-19T20:09:51.847Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

