module.exports = async function (context, req) {
  const date = "2022-11-20T11:08:31.503Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

