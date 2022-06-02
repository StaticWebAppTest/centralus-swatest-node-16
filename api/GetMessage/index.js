module.exports = async function (context, req) {
  const date = "2022-06-02T11:10:27.886Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

