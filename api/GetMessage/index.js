module.exports = async function (context, req) {
  const date = "2023-10-07T19:06:20.931Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

