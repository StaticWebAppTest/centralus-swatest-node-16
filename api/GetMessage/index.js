module.exports = async function (context, req) {
  const date = "2025-02-07T07:11:13.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

