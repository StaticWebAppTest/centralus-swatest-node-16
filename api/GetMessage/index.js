module.exports = async function (context, req) {
  const date = "2022-08-17T18:13:23.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

