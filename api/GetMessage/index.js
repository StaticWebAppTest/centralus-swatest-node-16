module.exports = async function (context, req) {
  const date = "2025-06-28T09:13:16.859Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

