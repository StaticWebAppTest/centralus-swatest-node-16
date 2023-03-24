module.exports = async function (context, req) {
  const date = "2023-03-24T20:10:03.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

