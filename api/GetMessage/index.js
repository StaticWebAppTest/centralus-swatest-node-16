module.exports = async function (context, req) {
  const date = "2023-05-04T21:07:43.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

