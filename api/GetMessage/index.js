module.exports = async function (context, req) {
  const date = "2023-02-19T21:08:19.026Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

