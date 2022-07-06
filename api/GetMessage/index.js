module.exports = async function (context, req) {
  const date = "2022-07-06T18:22:31.437Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

