module.exports = async function (context, req) {
  const date = "2024-05-22T09:11:59.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

