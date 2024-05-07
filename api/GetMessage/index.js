module.exports = async function (context, req) {
  const date = "2024-05-07T09:11:05.121Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

