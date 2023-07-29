module.exports = async function (context, req) {
  const date = "2023-07-29T09:07:30.419Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

