module.exports = async function (context, req) {
  const date = "2023-05-26T15:08:32.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

