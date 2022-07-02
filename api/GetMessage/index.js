module.exports = async function (context, req) {
  const date = "2022-07-02T14:09:00.165Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

