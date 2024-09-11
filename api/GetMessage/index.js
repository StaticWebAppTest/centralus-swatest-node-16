module.exports = async function (context, req) {
  const date = "2024-09-11T08:14:55.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

