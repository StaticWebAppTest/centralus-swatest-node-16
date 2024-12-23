module.exports = async function (context, req) {
  const date = "2024-12-23T20:12:20.985Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

