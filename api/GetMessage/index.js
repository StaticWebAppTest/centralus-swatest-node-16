module.exports = async function (context, req) {
  const date = "2023-09-25T01:43:32.129Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

