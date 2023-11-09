module.exports = async function (context, req) {
  const date = "2023-11-09T01:46:43.505Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

