module.exports = async function (context, req) {
  const date = "2022-12-19T20:10:31.929Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

