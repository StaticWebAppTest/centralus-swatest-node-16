module.exports = async function (context, req) {
  const date = "2024-03-16T10:09:52.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

