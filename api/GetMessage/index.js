module.exports = async function (context, req) {
  const date = "2024-01-31T07:09:26.449Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

