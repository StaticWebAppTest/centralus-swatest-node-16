module.exports = async function (context, req) {
  const date = "2023-06-09T12:16:46.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

