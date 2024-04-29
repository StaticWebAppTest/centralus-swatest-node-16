module.exports = async function (context, req) {
  const date = "2024-04-29T22:09:05.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

