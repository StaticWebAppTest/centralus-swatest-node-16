module.exports = async function (context, req) {
  const date = "2023-07-13T21:08:38.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

