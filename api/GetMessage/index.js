module.exports = async function (context, req) {
  const date = "2022-07-25T00:59:48.457Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

