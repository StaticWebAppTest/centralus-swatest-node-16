module.exports = async function (context, req) {
  const date = "2022-04-16T03:21:38.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

