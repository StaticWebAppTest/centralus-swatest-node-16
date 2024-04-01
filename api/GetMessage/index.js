module.exports = async function (context, req) {
  const date = "2024-04-01T22:09:13.533Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

