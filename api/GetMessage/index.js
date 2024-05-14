module.exports = async function (context, req) {
  const date = "2024-05-14T03:11:40.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

