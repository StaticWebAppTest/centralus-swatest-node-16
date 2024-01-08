module.exports = async function (context, req) {
  const date = "2024-01-08T05:09:30.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

