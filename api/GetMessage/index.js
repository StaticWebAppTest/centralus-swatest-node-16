module.exports = async function (context, req) {
  const date = "2024-05-10T23:09:41.960Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

