module.exports = async function (context, req) {
  const date = "2023-04-09T10:08:24.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

