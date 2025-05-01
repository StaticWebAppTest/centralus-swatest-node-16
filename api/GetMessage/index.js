module.exports = async function (context, req) {
  const date = "2025-05-01T18:18:20.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

