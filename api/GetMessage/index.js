module.exports = async function (context, req) {
  const date = "2023-11-01T13:10:51.207Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

