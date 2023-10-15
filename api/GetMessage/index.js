module.exports = async function (context, req) {
  const date = "2023-10-15T18:10:25.902Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

