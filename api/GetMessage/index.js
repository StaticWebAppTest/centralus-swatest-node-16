module.exports = async function (context, req) {
  const date = "2025-02-25T07:12:07.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

