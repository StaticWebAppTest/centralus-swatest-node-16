module.exports = async function (context, req) {
  const date = "2022-05-08T08:13:32.601Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

