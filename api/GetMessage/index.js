module.exports = async function (context, req) {
  const date = "2023-02-21T10:11:01.384Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

