module.exports = async function (context, req) {
  const date = "2022-10-10T05:57:40.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

