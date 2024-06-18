module.exports = async function (context, req) {
  const date = "2024-06-18T07:10:08.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

