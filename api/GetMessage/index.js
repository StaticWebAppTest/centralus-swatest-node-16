module.exports = async function (context, req) {
  const date = "2024-04-09T16:10:27.240Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

