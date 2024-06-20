module.exports = async function (context, req) {
  const date = "2024-06-20T09:11:52.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

