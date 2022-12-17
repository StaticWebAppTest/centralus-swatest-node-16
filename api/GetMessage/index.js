module.exports = async function (context, req) {
  const date = "2022-12-17T17:07:22.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

