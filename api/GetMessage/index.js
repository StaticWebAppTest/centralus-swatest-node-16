module.exports = async function (context, req) {
  const date = "2022-04-28T13:36:13.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

