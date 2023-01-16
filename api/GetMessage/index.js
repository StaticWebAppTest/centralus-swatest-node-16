module.exports = async function (context, req) {
  const date = "2023-01-16T05:09:17.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

