module.exports = async function (context, req) {
  const date = "2022-08-12T04:24:57.724Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

