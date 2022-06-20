module.exports = async function (context, req) {
  const date = "2022-06-20T21:10:30.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

