module.exports = async function (context, req) {
  const date = "2022-12-13T23:09:44.507Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

