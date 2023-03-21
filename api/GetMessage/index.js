module.exports = async function (context, req) {
  const date = "2023-03-21T23:08:42.357Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

