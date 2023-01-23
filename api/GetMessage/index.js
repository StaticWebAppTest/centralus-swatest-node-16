module.exports = async function (context, req) {
  const date = "2023-01-23T08:13:00.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

