module.exports = async function (context, req) {
  const date = "2024-09-15T11:08:37.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

