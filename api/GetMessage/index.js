module.exports = async function (context, req) {
  const date = "2023-01-21T00:51:30.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

