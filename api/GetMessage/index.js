module.exports = async function (context, req) {
  const date = "2024-09-25T07:12:01.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

