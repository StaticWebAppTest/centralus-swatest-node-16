module.exports = async function (context, req) {
  const date = "2025-04-21T09:14:07.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

