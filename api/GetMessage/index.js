module.exports = async function (context, req) {
  const date = "2023-07-07T22:09:28.785Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

