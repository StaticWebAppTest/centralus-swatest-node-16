module.exports = async function (context, req) {
  const date = "2024-05-03T18:12:00.031Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

