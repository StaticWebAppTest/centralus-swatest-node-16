module.exports = async function (context, req) {
  const date = "2022-07-02T13:19:11.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

