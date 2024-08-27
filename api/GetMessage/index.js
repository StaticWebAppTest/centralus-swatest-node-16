module.exports = async function (context, req) {
  const date = "2024-08-27T08:14:42.274Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

