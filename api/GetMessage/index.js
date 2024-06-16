module.exports = async function (context, req) {
  const date = "2024-06-16T09:11:33.954Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

