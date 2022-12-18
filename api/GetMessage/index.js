module.exports = async function (context, req) {
  const date = "2022-12-18T15:08:16.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

