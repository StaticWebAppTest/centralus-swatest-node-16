module.exports = async function (context, req) {
  const date = "2022-04-04T09:11:00.976Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

