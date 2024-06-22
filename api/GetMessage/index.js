module.exports = async function (context, req) {
  const date = "2024-06-22T11:07:39.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

