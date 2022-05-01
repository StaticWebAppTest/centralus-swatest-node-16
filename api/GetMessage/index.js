module.exports = async function (context, req) {
  const date = "2022-05-01T19:09:16.853Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

