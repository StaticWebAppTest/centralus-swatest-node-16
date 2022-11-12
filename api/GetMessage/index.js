module.exports = async function (context, req) {
  const date = "2022-11-12T03:18:19.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

