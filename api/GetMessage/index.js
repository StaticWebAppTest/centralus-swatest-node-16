module.exports = async function (context, req) {
  const date = "2023-09-22T07:08:24.484Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

