module.exports = async function (context, req) {
  const date = "2023-03-15T10:10:46.623Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

