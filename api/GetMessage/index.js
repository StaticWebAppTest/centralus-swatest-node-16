module.exports = async function (context, req) {
  const date = "2023-04-24T22:08:18.074Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

