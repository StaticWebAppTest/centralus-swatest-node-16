module.exports = async function (context, req) {
  const date = "2023-01-12T16:26:14.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

