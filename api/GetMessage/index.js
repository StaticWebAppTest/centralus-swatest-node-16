module.exports = async function (context, req) {
  const date = "2022-12-17T18:10:29.633Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

