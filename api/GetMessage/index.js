module.exports = async function (context, req) {
  const date = "2022-12-21T00:45:50.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

