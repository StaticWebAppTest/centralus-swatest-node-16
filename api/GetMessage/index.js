module.exports = async function (context, req) {
  const date = "2023-01-16T10:10:57.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

