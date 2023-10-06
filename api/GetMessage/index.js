module.exports = async function (context, req) {
  const date = "2023-10-06T00:40:44.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

