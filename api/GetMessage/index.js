module.exports = async function (context, req) {
  const date = "2023-05-31T08:11:18.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

