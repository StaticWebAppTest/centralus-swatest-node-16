module.exports = async function (context, req) {
  const date = "2023-11-21T11:08:00.284Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

