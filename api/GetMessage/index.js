module.exports = async function (context, req) {
  const date = "2024-06-03T08:14:03.394Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

