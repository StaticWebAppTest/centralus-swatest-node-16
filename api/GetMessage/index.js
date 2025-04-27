module.exports = async function (context, req) {
  const date = "2025-04-27T07:11:39.124Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

