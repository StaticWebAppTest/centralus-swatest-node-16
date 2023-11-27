module.exports = async function (context, req) {
  const date = "2023-11-27T07:08:58.046Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

