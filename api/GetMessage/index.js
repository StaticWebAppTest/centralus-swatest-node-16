module.exports = async function (context, req) {
  const date = "2023-07-16T08:11:29.479Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

