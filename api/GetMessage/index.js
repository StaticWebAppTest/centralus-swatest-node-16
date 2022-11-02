module.exports = async function (context, req) {
  const date = "2022-11-02T16:17:40.565Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

