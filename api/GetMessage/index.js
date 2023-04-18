module.exports = async function (context, req) {
  const date = "2023-04-18T20:09:41.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

