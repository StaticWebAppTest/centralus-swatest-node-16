module.exports = async function (context, req) {
  const date = "2022-08-05T18:13:49.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

