module.exports = async function (context, req) {
  const date = "2024-03-10T16:10:36.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

