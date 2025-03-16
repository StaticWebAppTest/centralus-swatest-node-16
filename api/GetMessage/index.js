module.exports = async function (context, req) {
  const date = "2025-03-16T11:10:33.644Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

