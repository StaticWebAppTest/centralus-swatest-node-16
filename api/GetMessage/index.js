module.exports = async function (context, req) {
  const date = "2023-11-06T23:08:44.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

