module.exports = async function (context, req) {
  const date = "2025-05-13T18:18:53.485Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

