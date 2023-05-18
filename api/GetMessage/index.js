module.exports = async function (context, req) {
  const date = "2023-05-18T13:11:05.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

