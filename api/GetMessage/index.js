module.exports = async function (context, req) {
  const date = "2023-07-04T22:09:47.671Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

