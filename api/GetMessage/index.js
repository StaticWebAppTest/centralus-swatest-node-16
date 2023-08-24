module.exports = async function (context, req) {
  const date = "2023-08-24T01:39:20.418Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

