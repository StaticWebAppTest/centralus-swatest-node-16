module.exports = async function (context, req) {
  const date = "2024-05-30T22:10:22.327Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

