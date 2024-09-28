module.exports = async function (context, req) {
  const date = "2024-09-28T02:12:53.358Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

