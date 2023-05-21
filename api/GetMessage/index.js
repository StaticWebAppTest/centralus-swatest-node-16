module.exports = async function (context, req) {
  const date = "2023-05-21T05:08:11.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

