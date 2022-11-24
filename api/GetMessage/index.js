module.exports = async function (context, req) {
  const date = "2022-11-24T13:22:24.871Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

