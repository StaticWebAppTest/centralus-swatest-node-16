module.exports = async function (context, req) {
  const date = "2023-03-28T10:10:30.890Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

