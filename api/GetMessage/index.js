module.exports = async function (context, req) {
  const date = "2025-07-20T11:11:30.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

