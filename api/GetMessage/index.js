module.exports = async function (context, req) {
  const date = "2023-02-15T21:09:05.036Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

