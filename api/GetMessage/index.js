module.exports = async function (context, req) {
  const date = "2023-07-15T11:07:31.337Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

