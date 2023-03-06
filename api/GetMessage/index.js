module.exports = async function (context, req) {
  const date = "2023-03-06T15:10:42.865Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

