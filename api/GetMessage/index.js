module.exports = async function (context, req) {
  const date = "2023-08-18T01:39:11.051Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

