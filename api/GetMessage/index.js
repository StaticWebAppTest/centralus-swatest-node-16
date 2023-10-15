module.exports = async function (context, req) {
  const date = "2023-10-15T19:06:33.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

