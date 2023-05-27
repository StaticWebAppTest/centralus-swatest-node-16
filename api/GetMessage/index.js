module.exports = async function (context, req) {
  const date = "2023-05-27T18:09:59.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

