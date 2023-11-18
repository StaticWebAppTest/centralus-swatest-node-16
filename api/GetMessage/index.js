module.exports = async function (context, req) {
  const date = "2023-11-18T03:09:39.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

