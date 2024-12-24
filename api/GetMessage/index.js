module.exports = async function (context, req) {
  const date = "2024-12-24T07:11:25.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

