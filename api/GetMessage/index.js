module.exports = async function (context, req) {
  const date = "2024-09-14T07:10:54.048Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

