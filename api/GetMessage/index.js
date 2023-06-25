module.exports = async function (context, req) {
  const date = "2023-06-25T06:13:04.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

