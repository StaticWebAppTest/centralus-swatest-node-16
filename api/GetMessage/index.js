module.exports = async function (context, req) {
  const date = "2024-10-28T03:22:20.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

