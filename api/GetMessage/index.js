module.exports = async function (context, req) {
  const date = "2024-06-11T03:11:34.827Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

