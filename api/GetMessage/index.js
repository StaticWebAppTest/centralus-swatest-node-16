module.exports = async function (context, req) {
  const date = "2024-10-06T11:09:31.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

