module.exports = async function (context, req) {
  const date = "2024-12-25T23:10:54.118Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

