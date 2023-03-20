module.exports = async function (context, req) {
  const date = "2023-03-20T11:08:24.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

