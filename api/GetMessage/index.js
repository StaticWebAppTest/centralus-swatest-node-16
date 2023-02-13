module.exports = async function (context, req) {
  const date = "2023-02-13T05:09:30.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

