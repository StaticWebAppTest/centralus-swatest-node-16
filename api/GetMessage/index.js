module.exports = async function (context, req) {
  const date = "2025-09-27T11:09:06.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

