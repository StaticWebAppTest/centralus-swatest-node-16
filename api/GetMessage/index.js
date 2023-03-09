module.exports = async function (context, req) {
  const date = "2023-03-09T10:11:13.355Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

