module.exports = async function (context, req) {
  const date = "2022-05-16T16:18:00.501Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

