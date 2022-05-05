module.exports = async function (context, req) {
  const date = "2022-05-05T14:15:14.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

