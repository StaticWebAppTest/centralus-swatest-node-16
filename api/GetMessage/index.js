module.exports = async function (context, req) {
  const date = "2022-06-01T12:25:04.460Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

