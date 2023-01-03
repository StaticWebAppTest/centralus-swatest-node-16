module.exports = async function (context, req) {
  const date = "2023-01-03T08:12:43.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

