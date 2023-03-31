module.exports = async function (context, req) {
  const date = "2023-03-31T08:12:20.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

