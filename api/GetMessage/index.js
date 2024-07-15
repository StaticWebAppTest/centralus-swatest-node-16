module.exports = async function (context, req) {
  const date = "2024-07-15T11:08:45.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

