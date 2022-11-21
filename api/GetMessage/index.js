module.exports = async function (context, req) {
  const date = "2022-11-21T00:59:52.119Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

