module.exports = async function (context, req) {
  const date = "2024-03-09T08:10:35.376Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

