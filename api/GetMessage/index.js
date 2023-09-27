module.exports = async function (context, req) {
  const date = "2023-09-27T16:11:38.041Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

