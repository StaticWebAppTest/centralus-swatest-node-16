module.exports = async function (context, req) {
  const date = "2023-11-06T22:08:18.556Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

