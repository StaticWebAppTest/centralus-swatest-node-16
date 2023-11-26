module.exports = async function (context, req) {
  const date = "2023-11-26T22:07:50.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

