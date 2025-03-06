module.exports = async function (context, req) {
  const date = "2025-03-06T09:13:19.713Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

