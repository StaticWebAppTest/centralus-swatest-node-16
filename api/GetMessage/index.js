module.exports = async function (context, req) {
  const date = "2024-02-19T06:12:42.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

