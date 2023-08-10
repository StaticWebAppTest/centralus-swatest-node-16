module.exports = async function (context, req) {
  const date = "2023-08-10T21:07:26.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

