module.exports = async function (context, req) {
  const date = "2023-01-20T19:07:40.779Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

