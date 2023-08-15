module.exports = async function (context, req) {
  const date = "2023-08-15T09:08:26.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

