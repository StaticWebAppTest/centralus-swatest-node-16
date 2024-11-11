module.exports = async function (context, req) {
  const date = "2024-11-11T21:10:39.092Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

