module.exports = async function (context, req) {
  const date = "2023-11-01T22:08:07.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

