module.exports = async function (context, req) {
  const date = "2023-09-22T22:07:40.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

