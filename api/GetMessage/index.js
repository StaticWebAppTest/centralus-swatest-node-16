module.exports = async function (context, req) {
  const date = "2022-03-28T16:13:56.368Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

