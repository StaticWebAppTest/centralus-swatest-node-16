module.exports = async function (context, req) {
  const date = "2022-06-01T07:13:18.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

