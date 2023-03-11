module.exports = async function (context, req) {
  const date = "2023-03-11T05:08:38.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

