module.exports = async function (context, req) {
  const date = "2023-10-31T11:07:28.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

