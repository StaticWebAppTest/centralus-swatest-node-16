module.exports = async function (context, req) {
  const date = "2024-02-11T09:08:01.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

