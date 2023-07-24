module.exports = async function (context, req) {
  const date = "2023-07-24T21:08:27.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

