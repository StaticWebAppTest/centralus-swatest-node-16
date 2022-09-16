module.exports = async function (context, req) {
  const date = "2022-09-16T04:17:50.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

