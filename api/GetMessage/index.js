module.exports = async function (context, req) {
  const date = "2022-12-23T07:08:38.093Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

