module.exports = async function (context, req) {
  const date = "2023-07-12T22:09:04.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

