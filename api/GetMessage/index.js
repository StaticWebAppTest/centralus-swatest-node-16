module.exports = async function (context, req) {
  const date = "2024-09-16T17:10:28.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

