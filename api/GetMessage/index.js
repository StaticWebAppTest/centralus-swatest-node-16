module.exports = async function (context, req) {
  const date = "2022-04-02T13:16:07.130Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

