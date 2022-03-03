module.exports = async function (context, req) {
  const date = "2022-03-03T10:14:48.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

