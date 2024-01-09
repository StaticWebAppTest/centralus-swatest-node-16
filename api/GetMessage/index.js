module.exports = async function (context, req) {
  const date = "2024-01-09T05:09:27.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

