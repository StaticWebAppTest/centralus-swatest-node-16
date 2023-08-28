module.exports = async function (context, req) {
  const date = "2023-08-28T16:11:04.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

