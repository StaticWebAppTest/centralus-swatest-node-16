module.exports = async function (context, req) {
  const date = "2024-09-13T07:12:30.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

