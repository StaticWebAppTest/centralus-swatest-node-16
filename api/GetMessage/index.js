module.exports = async function (context, req) {
  const date = "2023-07-16T01:07:00.043Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

