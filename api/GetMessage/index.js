module.exports = async function (context, req) {
  const date = "2022-10-08T08:16:32.215Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

