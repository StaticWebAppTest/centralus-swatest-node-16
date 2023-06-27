module.exports = async function (context, req) {
  const date = "2023-06-27T22:09:20.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

