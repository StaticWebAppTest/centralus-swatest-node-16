module.exports = async function (context, req) {
  const date = "2023-05-22T08:12:01.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

