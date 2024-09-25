module.exports = async function (context, req) {
  const date = "2024-09-25T18:15:22.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

