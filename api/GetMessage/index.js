module.exports = async function (context, req) {
  const date = "2023-12-19T03:09:53.047Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

