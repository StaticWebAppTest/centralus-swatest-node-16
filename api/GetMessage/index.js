module.exports = async function (context, req) {
  const date = "2022-10-23T18:16:16.573Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

