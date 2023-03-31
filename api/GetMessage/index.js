module.exports = async function (context, req) {
  const date = "2023-03-31T10:10:00.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

