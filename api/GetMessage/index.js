module.exports = async function (context, req) {
  const date = "2024-09-18T07:10:59.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

