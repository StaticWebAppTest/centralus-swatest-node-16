module.exports = async function (context, req) {
  const date = "2024-08-18T22:10:27.002Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

