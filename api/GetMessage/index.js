module.exports = async function (context, req) {
  const date = "2022-11-01T09:13:02.496Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

