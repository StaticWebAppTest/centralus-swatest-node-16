module.exports = async function (context, req) {
  const date = "2024-01-23T08:12:30.864Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

