module.exports = async function (context, req) {
  const date = "2023-09-18T08:12:11.536Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

