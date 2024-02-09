module.exports = async function (context, req) {
  const date = "2024-02-09T07:07:57.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

