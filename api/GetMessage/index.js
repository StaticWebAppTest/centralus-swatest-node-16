module.exports = async function (context, req) {
  const date = "2022-11-23T11:08:40.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

