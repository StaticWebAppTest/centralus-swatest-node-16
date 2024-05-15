module.exports = async function (context, req) {
  const date = "2024-05-15T05:10:37.655Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

