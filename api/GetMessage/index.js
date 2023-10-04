module.exports = async function (context, req) {
  const date = "2023-10-04T04:10:49.416Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

