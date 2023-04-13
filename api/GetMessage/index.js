module.exports = async function (context, req) {
  const date = "2023-04-13T11:07:42.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

