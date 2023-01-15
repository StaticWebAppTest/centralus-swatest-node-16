module.exports = async function (context, req) {
  const date = "2023-01-15T10:09:01.366Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

