module.exports = async function (context, req) {
  const date = "2024-07-11T10:10:47.131Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

