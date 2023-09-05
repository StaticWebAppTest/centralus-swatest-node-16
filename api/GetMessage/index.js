module.exports = async function (context, req) {
  const date = "2023-09-05T10:09:31.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

