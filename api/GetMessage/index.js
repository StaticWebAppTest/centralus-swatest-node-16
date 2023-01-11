module.exports = async function (context, req) {
  const date = "2023-01-11T18:14:46.113Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

