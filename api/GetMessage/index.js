module.exports = async function (context, req) {
  const date = "2024-12-28T09:10:46.541Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

