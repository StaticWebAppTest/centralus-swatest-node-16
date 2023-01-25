module.exports = async function (context, req) {
  const date = "2023-01-25T03:10:14.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

