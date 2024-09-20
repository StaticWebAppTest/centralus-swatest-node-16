module.exports = async function (context, req) {
  const date = "2024-09-20T09:15:11.246Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

