module.exports = async function (context, req) {
  const date = "2023-03-07T19:08:10.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

