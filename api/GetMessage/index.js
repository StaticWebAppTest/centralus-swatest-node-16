module.exports = async function (context, req) {
  const date = "2022-07-16T23:09:54.380Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

