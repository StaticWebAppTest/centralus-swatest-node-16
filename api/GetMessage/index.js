module.exports = async function (context, req) {
  const date = "2023-09-23T01:39:29.689Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

