module.exports = async function (context, req) {
  const date = "2023-01-05T18:12:09.560Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

