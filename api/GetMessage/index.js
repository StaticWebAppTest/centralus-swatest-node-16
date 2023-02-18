module.exports = async function (context, req) {
  const date = "2023-02-18T17:08:29.887Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

