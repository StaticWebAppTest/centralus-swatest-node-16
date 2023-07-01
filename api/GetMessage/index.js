module.exports = async function (context, req) {
  const date = "2023-07-01T09:09:11.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

