module.exports = async function (context, req) {
  const date = "2023-12-27T02:19:32.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

