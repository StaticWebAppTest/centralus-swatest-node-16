module.exports = async function (context, req) {
  const date = "2024-02-25T17:07:59.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

