module.exports = async function (context, req) {
  const date = "2023-12-18T14:09:10.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

