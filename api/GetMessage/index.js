module.exports = async function (context, req) {
  const date = "2023-12-23T21:07:34.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

