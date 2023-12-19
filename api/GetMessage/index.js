module.exports = async function (context, req) {
  const date = "2023-12-19T15:09:14.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

