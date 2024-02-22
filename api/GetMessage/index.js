module.exports = async function (context, req) {
  const date = "2024-02-22T08:12:09.377Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

