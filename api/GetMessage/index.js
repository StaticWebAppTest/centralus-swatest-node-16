module.exports = async function (context, req) {
  const date = "2022-02-28T19:08:04.423Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

