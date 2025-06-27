module.exports = async function (context, req) {
  const date = "2025-06-27T04:23:06.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

