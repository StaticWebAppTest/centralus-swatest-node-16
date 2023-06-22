module.exports = async function (context, req) {
  const date = "2023-06-22T21:08:50.005Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

