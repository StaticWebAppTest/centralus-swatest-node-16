module.exports = async function (context, req) {
  const date = "2022-07-13T18:12:42.483Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

