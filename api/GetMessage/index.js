module.exports = async function (context, req) {
  const date = "2023-10-04T03:09:21.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

