module.exports = async function (context, req) {
  const date = "2023-12-09T01:48:22.698Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

