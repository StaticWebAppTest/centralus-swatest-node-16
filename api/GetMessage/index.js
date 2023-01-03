module.exports = async function (context, req) {
  const date = "2023-01-03T12:18:01.793Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

