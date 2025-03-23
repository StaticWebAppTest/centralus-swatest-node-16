module.exports = async function (context, req) {
  const date = "2025-03-23T10:11:55.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

