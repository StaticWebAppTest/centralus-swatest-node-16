module.exports = async function (context, req) {
  const date = "2023-11-19T09:08:09.472Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

