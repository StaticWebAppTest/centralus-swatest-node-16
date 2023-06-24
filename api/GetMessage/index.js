module.exports = async function (context, req) {
  const date = "2023-06-24T21:08:36.010Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

