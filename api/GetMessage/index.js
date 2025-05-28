module.exports = async function (context, req) {
  const date = "2025-05-28T11:11:57.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

