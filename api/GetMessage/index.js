module.exports = async function (context, req) {
  const date = "2022-07-14T01:03:20.947Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

