module.exports = async function (context, req) {
  const date = "2024-09-26T22:10:28.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

