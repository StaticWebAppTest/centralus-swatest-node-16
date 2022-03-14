module.exports = async function (context, req) {
  const date = "2022-03-14T03:12:06.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

