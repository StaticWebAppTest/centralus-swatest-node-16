module.exports = async function (context, req) {
  const date = "2023-08-05T19:06:10.561Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

