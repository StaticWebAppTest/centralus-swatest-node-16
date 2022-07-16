module.exports = async function (context, req) {
  const date = "2022-07-16T17:10:28.359Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

