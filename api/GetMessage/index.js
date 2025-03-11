module.exports = async function (context, req) {
  const date = "2025-03-11T11:10:38.718Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

