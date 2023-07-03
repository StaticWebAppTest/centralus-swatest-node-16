module.exports = async function (context, req) {
  const date = "2023-07-03T23:10:13.407Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

