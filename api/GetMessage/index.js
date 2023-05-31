module.exports = async function (context, req) {
  const date = "2023-05-31T10:09:36.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

