module.exports = async function (context, req) {
  const date = "2023-05-27T22:07:32.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

