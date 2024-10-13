module.exports = async function (context, req) {
  const date = "2024-10-13T09:11:43.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

