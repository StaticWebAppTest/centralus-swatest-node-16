module.exports = async function (context, req) {
  const date = "2023-03-13T10:10:58.657Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

