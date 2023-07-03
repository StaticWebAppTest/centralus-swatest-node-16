module.exports = async function (context, req) {
  const date = "2023-07-03T17:08:29.125Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

