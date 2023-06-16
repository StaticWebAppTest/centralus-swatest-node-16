module.exports = async function (context, req) {
  const date = "2023-06-16T14:07:55.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

