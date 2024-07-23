module.exports = async function (context, req) {
  const date = "2024-07-23T07:09:58.935Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

