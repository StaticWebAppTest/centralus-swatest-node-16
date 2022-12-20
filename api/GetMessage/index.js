module.exports = async function (context, req) {
  const date = "2022-12-20T23:09:22.951Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

