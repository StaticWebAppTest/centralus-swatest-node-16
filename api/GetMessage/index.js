module.exports = async function (context, req) {
  const date = "2022-05-25T18:13:35.660Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

