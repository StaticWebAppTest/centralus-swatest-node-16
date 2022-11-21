module.exports = async function (context, req) {
  const date = "2022-11-21T03:45:23.173Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

