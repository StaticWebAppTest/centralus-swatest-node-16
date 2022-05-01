module.exports = async function (context, req) {
  const date = "2022-05-01T13:20:47.526Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

