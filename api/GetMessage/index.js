module.exports = async function (context, req) {
  const date = "2024-05-06T16:12:10.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

