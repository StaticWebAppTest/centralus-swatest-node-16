module.exports = async function (context, req) {
  const date = "2024-02-16T05:09:29.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

