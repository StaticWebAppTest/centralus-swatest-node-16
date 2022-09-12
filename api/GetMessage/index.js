module.exports = async function (context, req) {
  const date = "2022-09-12T21:11:25.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

