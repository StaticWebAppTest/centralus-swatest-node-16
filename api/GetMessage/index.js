module.exports = async function (context, req) {
  const date = "2024-01-11T05:09:31.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

