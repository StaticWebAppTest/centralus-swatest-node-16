module.exports = async function (context, req) {
  const date = "2023-03-17T07:08:56.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

