module.exports = async function (context, req) {
  const date = "2023-07-03T18:11:59.616Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

