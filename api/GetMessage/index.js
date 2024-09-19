module.exports = async function (context, req) {
  const date = "2024-09-19T09:12:07.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

