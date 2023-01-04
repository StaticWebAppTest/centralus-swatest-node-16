module.exports = async function (context, req) {
  const date = "2023-01-04T12:18:00.691Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

