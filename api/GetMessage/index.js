module.exports = async function (context, req) {
  const date = "2024-02-23T15:09:43.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

