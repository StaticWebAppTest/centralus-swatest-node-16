module.exports = async function (context, req) {
  const date = "2023-08-07T00:47:49.863Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

