module.exports = async function (context, req) {
  const date = "2023-07-13T11:08:17.962Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

