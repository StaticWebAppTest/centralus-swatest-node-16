module.exports = async function (context, req) {
  const date = "2024-01-06T18:10:55.715Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

