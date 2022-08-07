module.exports = async function (context, req) {
  const date = "2022-08-07T14:09:24.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

