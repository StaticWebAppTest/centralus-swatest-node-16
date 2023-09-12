module.exports = async function (context, req) {
  const date = "2023-09-12T00:38:50.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

