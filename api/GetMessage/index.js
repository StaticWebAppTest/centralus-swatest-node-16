module.exports = async function (context, req) {
  const date = "2023-10-01T13:08:45.450Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

