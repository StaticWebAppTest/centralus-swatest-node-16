module.exports = async function (context, req) {
  const date = "2022-06-23T00:52:08.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

