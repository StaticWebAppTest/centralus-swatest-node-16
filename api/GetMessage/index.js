module.exports = async function (context, req) {
  const date = "2023-03-31T13:14:10.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

