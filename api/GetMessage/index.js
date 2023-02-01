module.exports = async function (context, req) {
  const date = "2023-02-01T14:09:00.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

