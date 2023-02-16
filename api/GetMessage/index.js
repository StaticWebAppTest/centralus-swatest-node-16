module.exports = async function (context, req) {
  const date = "2023-02-16T08:13:01.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

