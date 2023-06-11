module.exports = async function (context, req) {
  const date = "2023-06-11T04:10:06.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

