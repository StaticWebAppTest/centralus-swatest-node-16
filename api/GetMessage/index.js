module.exports = async function (context, req) {
  const date = "2022-03-14T04:18:37.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

