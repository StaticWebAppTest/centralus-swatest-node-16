module.exports = async function (context, req) {
  const date = "2023-01-15T16:11:26.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

