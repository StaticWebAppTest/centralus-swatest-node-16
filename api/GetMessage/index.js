module.exports = async function (context, req) {
  const date = "2024-10-10T11:10:26.302Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

