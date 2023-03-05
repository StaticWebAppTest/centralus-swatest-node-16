module.exports = async function (context, req) {
  const date = "2023-03-05T14:08:23.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

