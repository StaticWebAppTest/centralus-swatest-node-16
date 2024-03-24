module.exports = async function (context, req) {
  const date = "2024-03-24T08:10:33.993Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

