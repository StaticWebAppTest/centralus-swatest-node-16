module.exports = async function (context, req) {
  const date = "2022-08-13T18:12:21.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

