module.exports = async function (context, req) {
  const date = "2022-07-28T08:16:11.839Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

