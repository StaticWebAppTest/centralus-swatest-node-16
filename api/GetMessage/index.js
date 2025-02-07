module.exports = async function (context, req) {
  const date = "2025-02-07T11:09:33.693Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

