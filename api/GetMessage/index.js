module.exports = async function (context, req) {
  const date = "2024-09-23T11:09:37.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

