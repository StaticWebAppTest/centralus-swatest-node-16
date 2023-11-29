module.exports = async function (context, req) {
  const date = "2023-11-29T20:09:45.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

