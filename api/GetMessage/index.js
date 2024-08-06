module.exports = async function (context, req) {
  const date = "2024-08-06T08:13:23.581Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

