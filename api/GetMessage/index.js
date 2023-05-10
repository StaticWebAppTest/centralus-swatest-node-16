module.exports = async function (context, req) {
  const date = "2023-05-10T04:10:15.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

