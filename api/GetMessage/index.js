module.exports = async function (context, req) {
  const date = "2024-08-21T10:11:42.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

