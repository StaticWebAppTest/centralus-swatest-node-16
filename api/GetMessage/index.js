module.exports = async function (context, req) {
  const date = "2023-11-28T10:10:18.845Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

