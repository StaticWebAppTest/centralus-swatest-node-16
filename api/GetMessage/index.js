module.exports = async function (context, req) {
  const date = "2023-06-24T22:09:06.195Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

