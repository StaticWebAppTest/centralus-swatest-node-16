module.exports = async function (context, req) {
  const date = "2024-09-11T22:10:15.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

