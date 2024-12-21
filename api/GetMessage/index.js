module.exports = async function (context, req) {
  const date = "2024-12-21T15:10:19.339Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

