module.exports = async function (context, req) {
  const date = "2023-09-05T00:39:12.169Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

