module.exports = async function (context, req) {
  const date = "2023-04-06T23:08:56.659Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

