module.exports = async function (context, req) {
  const date = "2022-07-23T08:13:51.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

