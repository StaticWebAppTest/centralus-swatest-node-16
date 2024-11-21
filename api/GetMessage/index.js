module.exports = async function (context, req) {
  const date = "2024-11-21T09:13:19.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

