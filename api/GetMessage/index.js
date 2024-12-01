module.exports = async function (context, req) {
  const date = "2024-12-01T09:11:54.999Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

