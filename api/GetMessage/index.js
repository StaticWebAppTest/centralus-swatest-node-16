module.exports = async function (context, req) {
  const date = "2023-12-01T01:58:17.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

