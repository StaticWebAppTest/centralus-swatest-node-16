module.exports = async function (context, req) {
  const date = "2023-01-17T14:08:52.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

