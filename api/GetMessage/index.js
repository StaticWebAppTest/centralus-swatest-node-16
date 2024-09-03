module.exports = async function (context, req) {
  const date = "2024-09-03T14:10:38.369Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

