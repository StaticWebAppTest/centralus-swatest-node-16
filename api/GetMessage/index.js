module.exports = async function (context, req) {
  const date = "2023-11-08T01:46:05.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

