module.exports = async function (context, req) {
  const date = "2024-07-20T23:10:18.520Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

