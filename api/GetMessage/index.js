module.exports = async function (context, req) {
  const date = "2023-01-03T19:07:38.651Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

