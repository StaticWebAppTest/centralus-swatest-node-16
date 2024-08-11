module.exports = async function (context, req) {
  const date = "2024-08-11T21:10:38.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

