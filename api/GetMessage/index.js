module.exports = async function (context, req) {
  const date = "2022-09-28T11:11:55.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

