module.exports = async function (context, req) {
  const date = "2023-08-20T18:09:16.314Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

