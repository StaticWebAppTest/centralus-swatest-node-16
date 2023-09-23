module.exports = async function (context, req) {
  const date = "2023-09-23T07:07:20.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

