module.exports = async function (context, req) {
  const date = "2023-03-05T22:09:20.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

