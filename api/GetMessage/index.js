module.exports = async function (context, req) {
  const date = "2023-03-16T11:08:26.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

