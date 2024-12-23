module.exports = async function (context, req) {
  const date = "2024-12-23T04:14:36.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

