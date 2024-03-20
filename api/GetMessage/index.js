module.exports = async function (context, req) {
  const date = "2024-03-20T03:10:37.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

