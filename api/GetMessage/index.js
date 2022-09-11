module.exports = async function (context, req) {
  const date = "2022-09-11T11:09:59.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

