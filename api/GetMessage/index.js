module.exports = async function (context, req) {
  const date = "2022-12-23T17:08:25.571Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

