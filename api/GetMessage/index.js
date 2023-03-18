module.exports = async function (context, req) {
  const date = "2023-03-18T03:10:07.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

