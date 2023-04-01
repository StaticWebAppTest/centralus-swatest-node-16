module.exports = async function (context, req) {
  const date = "2023-04-01T21:07:11.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

