module.exports = async function (context, req) {
  const date = "2022-03-16T16:13:22.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

