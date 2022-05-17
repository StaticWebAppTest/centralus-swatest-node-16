module.exports = async function (context, req) {
  const date = "2022-05-17T00:54:16.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

