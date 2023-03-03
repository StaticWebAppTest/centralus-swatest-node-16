module.exports = async function (context, req) {
  const date = "2023-03-03T21:08:13.557Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

