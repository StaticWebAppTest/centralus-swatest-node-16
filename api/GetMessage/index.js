module.exports = async function (context, req) {
  const date = "2024-05-20T14:09:31.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

