module.exports = async function (context, req) {
  const date = "2023-10-22T08:10:19.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

