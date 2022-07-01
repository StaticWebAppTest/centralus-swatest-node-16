module.exports = async function (context, req) {
  const date = "2022-07-01T19:08:43.342Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

