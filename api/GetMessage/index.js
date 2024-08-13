module.exports = async function (context, req) {
  const date = "2024-08-13T11:08:54.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

