module.exports = async function (context, req) {
  const date = "2023-01-12T07:08:55.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

