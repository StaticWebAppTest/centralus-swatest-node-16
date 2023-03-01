module.exports = async function (context, req) {
  const date = "2023-03-01T14:09:34.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

