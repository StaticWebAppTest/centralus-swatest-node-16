module.exports = async function (context, req) {
  const date = "2023-07-09T12:17:57.529Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

