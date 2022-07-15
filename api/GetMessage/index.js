module.exports = async function (context, req) {
  const date = "2022-07-15T17:20:12.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

