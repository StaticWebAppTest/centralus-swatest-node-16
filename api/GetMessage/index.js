module.exports = async function (context, req) {
  const date = "2023-10-13T13:12:39.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

