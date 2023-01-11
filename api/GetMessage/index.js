module.exports = async function (context, req) {
  const date = "2023-01-11T22:10:13.916Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

