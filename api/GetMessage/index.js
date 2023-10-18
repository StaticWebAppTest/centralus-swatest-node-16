module.exports = async function (context, req) {
  const date = "2023-10-18T22:08:06.965Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

