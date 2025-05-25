module.exports = async function (context, req) {
  const date = "2025-05-25T07:11:47.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

