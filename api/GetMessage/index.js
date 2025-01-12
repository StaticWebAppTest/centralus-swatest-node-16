module.exports = async function (context, req) {
  const date = "2025-01-12T11:09:43.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

