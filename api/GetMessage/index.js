module.exports = async function (context, req) {
  const date = "2024-03-16T02:14:01.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

