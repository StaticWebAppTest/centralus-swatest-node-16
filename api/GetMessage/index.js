module.exports = async function (context, req) {
  const date = "2025-09-25T11:11:43.850Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

