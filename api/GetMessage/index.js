module.exports = async function (context, req) {
  const date = "2022-02-28T21:08:26.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

