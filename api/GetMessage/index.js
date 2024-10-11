module.exports = async function (context, req) {
  const date = "2024-10-11T08:15:31.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

