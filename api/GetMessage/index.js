module.exports = async function (context, req) {
  const date = "2023-03-18T21:08:13.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

