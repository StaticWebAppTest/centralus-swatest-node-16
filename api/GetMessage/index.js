module.exports = async function (context, req) {
  const date = "2024-07-08T11:09:37.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

