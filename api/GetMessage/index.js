module.exports = async function (context, req) {
  const date = "2024-05-17T09:11:36.877Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

