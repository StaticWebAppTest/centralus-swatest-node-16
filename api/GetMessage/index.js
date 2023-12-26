module.exports = async function (context, req) {
  const date = "2023-12-26T05:09:04.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

