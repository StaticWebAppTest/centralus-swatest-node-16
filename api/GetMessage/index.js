module.exports = async function (context, req) {
  const date = "2024-03-12T09:11:31.794Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

