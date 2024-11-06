module.exports = async function (context, req) {
  const date = "2024-11-06T14:11:07.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

