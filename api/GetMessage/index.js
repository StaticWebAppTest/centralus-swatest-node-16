module.exports = async function (context, req) {
  const date = "2024-03-11T08:12:22.764Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

