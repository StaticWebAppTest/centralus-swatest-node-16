module.exports = async function (context, req) {
  const date = "2024-09-23T12:22:18.515Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

