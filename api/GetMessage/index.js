module.exports = async function (context, req) {
  const date = "2024-03-21T23:10:11.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

