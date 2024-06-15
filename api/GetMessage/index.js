module.exports = async function (context, req) {
  const date = "2024-06-15T06:12:55.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

