module.exports = async function (context, req) {
  const date = "2023-12-01T11:07:58.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

