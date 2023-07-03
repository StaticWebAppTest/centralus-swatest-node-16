module.exports = async function (context, req) {
  const date = "2023-07-03T09:10:15.107Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

