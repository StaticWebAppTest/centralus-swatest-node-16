module.exports = async function (context, req) {
  const date = "2024-09-18T20:12:01.374Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

