module.exports = async function (context, req) {
  const date = "2023-03-18T16:11:22.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

