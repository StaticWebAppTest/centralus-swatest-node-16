module.exports = async function (context, req) {
  const date = "2023-03-11T10:09:20.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

