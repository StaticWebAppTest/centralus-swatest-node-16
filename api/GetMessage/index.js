module.exports = async function (context, req) {
  const date = "2023-04-21T04:10:56.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

