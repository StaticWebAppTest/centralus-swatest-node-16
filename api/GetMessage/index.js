module.exports = async function (context, req) {
  const date = "2024-04-30T02:19:22.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

