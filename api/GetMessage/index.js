module.exports = async function (context, req) {
  const date = "2025-02-11T10:13:05.572Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

