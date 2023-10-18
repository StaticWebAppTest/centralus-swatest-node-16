module.exports = async function (context, req) {
  const date = "2023-10-18T13:12:05.816Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

