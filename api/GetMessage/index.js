module.exports = async function (context, req) {
  const date = "2024-01-03T10:09:36.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

