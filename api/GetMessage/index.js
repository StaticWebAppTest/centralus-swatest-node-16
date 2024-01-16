module.exports = async function (context, req) {
  const date = "2024-01-16T03:10:08.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

