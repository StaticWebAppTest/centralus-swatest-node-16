module.exports = async function (context, req) {
  const date = "2023-02-18T16:12:05.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

