module.exports = async function (context, req) {
  const date = "2023-03-11T03:10:02.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

