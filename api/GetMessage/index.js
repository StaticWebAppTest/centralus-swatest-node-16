module.exports = async function (context, req) {
  const date = "2024-09-29T09:12:05.627Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

