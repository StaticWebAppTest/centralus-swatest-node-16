module.exports = async function (context, req) {
  const date = "2024-01-06T08:11:10.320Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

