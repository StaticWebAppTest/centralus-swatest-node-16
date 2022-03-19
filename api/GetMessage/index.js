module.exports = async function (context, req) {
  const date = "2022-03-19T10:10:45.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

