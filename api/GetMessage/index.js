module.exports = async function (context, req) {
  const date = "2022-10-02T13:33:07.564Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

