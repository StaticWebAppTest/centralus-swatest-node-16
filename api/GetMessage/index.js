module.exports = async function (context, req) {
  const date = "2024-11-11T09:13:22.095Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

