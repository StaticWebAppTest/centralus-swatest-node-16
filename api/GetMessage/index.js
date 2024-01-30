module.exports = async function (context, req) {
  const date = "2024-01-30T07:09:15.032Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

