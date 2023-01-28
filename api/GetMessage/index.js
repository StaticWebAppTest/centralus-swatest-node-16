module.exports = async function (context, req) {
  const date = "2023-01-28T23:08:50.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

