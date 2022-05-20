module.exports = async function (context, req) {
  const date = "2022-05-20T23:11:46.897Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

