module.exports = async function (context, req) {
  const date = "2024-02-27T05:09:43.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

