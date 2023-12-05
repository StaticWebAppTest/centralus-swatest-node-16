module.exports = async function (context, req) {
  const date = "2023-12-05T18:12:01.283Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

