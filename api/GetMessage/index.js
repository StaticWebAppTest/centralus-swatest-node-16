module.exports = async function (context, req) {
  const date = "2024-11-19T15:12:52.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

