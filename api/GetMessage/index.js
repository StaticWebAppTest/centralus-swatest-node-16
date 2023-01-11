module.exports = async function (context, req) {
  const date = "2023-01-11T21:09:06.202Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

