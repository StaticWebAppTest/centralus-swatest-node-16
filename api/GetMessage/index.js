module.exports = async function (context, req) {
  const date = "2022-10-14T08:19:31.085Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

