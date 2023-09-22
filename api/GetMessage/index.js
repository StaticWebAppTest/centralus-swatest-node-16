module.exports = async function (context, req) {
  const date = "2023-09-22T08:11:24.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

