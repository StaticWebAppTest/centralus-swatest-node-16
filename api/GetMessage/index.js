module.exports = async function (context, req) {
  const date = "2022-02-28T20:11:00.832Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

