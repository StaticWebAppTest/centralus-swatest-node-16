module.exports = async function (context, req) {
  const date = "2023-06-10T08:10:14.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

