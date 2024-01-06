module.exports = async function (context, req) {
  const date = "2024-01-06T04:11:19.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

