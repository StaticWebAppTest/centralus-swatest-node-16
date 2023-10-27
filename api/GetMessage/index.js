module.exports = async function (context, req) {
  const date = "2023-10-27T09:08:51.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

