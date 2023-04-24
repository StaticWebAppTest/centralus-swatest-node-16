module.exports = async function (context, req) {
  const date = "2023-04-24T10:09:47.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

