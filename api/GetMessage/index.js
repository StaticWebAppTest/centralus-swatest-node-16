module.exports = async function (context, req) {
  const date = "2025-05-14T05:13:45.686Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

