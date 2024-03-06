module.exports = async function (context, req) {
  const date = "2024-03-06T07:09:01.567Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

