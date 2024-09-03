module.exports = async function (context, req) {
  const date = "2024-09-03T16:14:44.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

