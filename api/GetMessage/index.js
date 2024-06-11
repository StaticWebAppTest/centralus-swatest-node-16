module.exports = async function (context, req) {
  const date = "2024-06-11T11:09:36.054Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

