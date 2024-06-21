module.exports = async function (context, req) {
  const date = "2024-06-21T13:12:15.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

