module.exports = async function (context, req) {
  const date = "2023-05-13T13:08:43.199Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

