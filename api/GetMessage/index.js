module.exports = async function (context, req) {
  const date = "2023-02-19T09:09:06.052Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

